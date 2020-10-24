const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
  // insert data in table
  // await saveOrphanage(db, {    
  //   lat: '-18.9133594',
  //   lng: '-48.2964542',
  //   name: 'Lar de amor',
  //   about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
  //   whatsapp: '(34)99108-6221',
  //   images: [
  //     'https://source.unsplash.com/random?id=8',
  //     'https://source.unsplash.com/random?id=4'
  //   ].toString(),
  //   instructions: 'Venha conhecer as crianças abrigadas e traga amor e carinho para dar a elas :)',
  //   opening_hours: 'Horário de visitas das 8h às 18h',
  //   open_on_weekends: '1'
  // })
  // // check table
  // const selectedTable = await db.all('SELECT * FROM orphanages')
  // console.log(selectedTable)  

  // check orphanate by id
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
  // console.log(orphanage)

  //delet data from table

  // console.log(await db.run(`DELETE FROM orphanages WHERE id = ''`))

})