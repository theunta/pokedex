const db = require('../db/db')

const User = {
  create: (name, email, passwordDigest, favourite1, favourite2, favourite3, favourite4, favourite5, favourite6, avatar, trainerID) => {
    const sql = `
      INSERT INTO users(name, email, password_digest, favourite1, favourite2, favourite3, favourite4, favourite5, favourite6, avatar, trainerID)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *
    `

    return db
      .query(sql, [name, email, passwordDigest, favourite1, favourite2, favourite3, favourite4, favourite5, favourite6, avatar, trainerID])
      .then(dbRes => dbRes.rows[0].email)
  },

  findByEmail: email => {
    const sql = `
      SELECT * FROM users
      WHERE email = $1
    `

    return db
      .query(sql, [email])
      .then(dbRes => dbRes.rows[0])
  },

  findById: id => {
    const sql = `
      SELECT * FROM users
      WHERE id = $1
    `

    return db
      .query(sql, [id])
      .then(dbRes => dbRes.rows[0].email)
  }
}

module.exports = User