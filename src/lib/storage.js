import pg from 'pg'

let config = {
  user: 'jack',
  database: 'jack',
  password: 'jack',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 3000,
}

let queryData = (sqlString) => {
  return new Promise( (res, rej) => {

    let client = new pg.Client(config)

    client.connect( (err) => {
      if (err) throw err

      client.query(sqlString, (err, result) => {
        if (err) throw err

        res(result.rows[0])

        client.end( (err) => {
          if (err) throw err
        })
      })
    })

  })
}

let addData = ( sqlString ) => {

}

let delData = ( sqlString ) => {

}

let updateData = ( sqlString ) => {

}

module.exports = queryData
