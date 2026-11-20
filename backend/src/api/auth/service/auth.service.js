

export const loginService = async (email, password) => {
    
    const normalizedEmail = normalizeEmail(email);
    
    const sql = 'select user-id, first-name, last-name, email,passwordhash FROM users WHERE email = ?';

    const rows = await safeExecute(sql, [normalizedEmail]);

    if (rows.length === 0) {
        throw new Error('invalid email or password');
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.passwordhash);

    if (!isMatch) {
        throw new Error('invalid email or password');
    }

    const playload = {
        id: user.user_id,
        firstName: user.first_name,
        lastName: user.last_name,

    };

    const token = jwt.sign(playload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { user, token };
};