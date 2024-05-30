import { Router } from 'express'

export const router = Router()

router.get('/', (req, res) => {
  res.send('Nosotros somos el Grupo #1')
})

router.get('/integrantes', (req, res) => {
  res.json([
    {
      nombre: 'Sebastian',
      apellido: 'Ni idea',
      rol: 'Scrum Master'
    },
    {
      nombre: 'Alejandro',
      apellido: 'Quiroz',
      rol: 'DevOps'
    },
    {
      nombre: 'Cristian',
      apellido: 'Usiña',
      rol: 'Frontend'
    },
    {
      nombre: 'Carlos',
      apellido: 'Ushiña',
      rol: 'QA'
    },
    {
      nombre: 'Anthony',
      apellido: 'Haro',
      rol: 'Frontend'
    },
    {
      nombre: 'Kevin',
      apellido: 'Coloma',
      rol: 'Backend'
    }
  ])
})
router.get('/integrantes/:nombre', (req, res) => {
  const { nombre } = req.params
  const integrantes = [
    {
      nombre: 'Sebastian',
      apellido: 'Ni idea',
      rol: 'Scrum Master'
    },
    {
      nombre: 'Alejandro',
      apellido: 'Quiroz',
      rol: 'DevOps'
    },
    {
      nombre: 'Cristian',
      apellido: 'Usiña',
      rol: 'Frontend'
    },
    {
      nombre: 'Carlos',
      apellido: 'Ushiña',
      rol: 'QA'
    },
    {
      nombre: 'Anthony',
      apellido: 'Haro',
      rol: 'Frontend'
    },
    {
      nombre: 'Kevin',
      apellido: 'Coloma',
      rol: 'Backend'
    }
  ]
  const result = integrantes.find(i => i.nombre.toLocaleLowerCase() === nombre)
  result ? res.json(result) : res.json({ msg: 'No esta en este grupo' })
})

router.get('/products', (req, res) => {
  const products = [
    {
      name: 'Jabon',
      poster: 'https://www.imagui.com/i/imagenes-jabon-animado-imagui-2551507.webp'
    },
    {
      name: 'Shampoo',
      poster: 'https://img.freepik.com/foto-gratis/botella-champu-producto-belleza_53876-142854.jpg?size=626&ext=jpg'
    }
  ]
  let html = '<h1>Productos</h1>'
  products.forEach(product => {
    html += `
      <img src='${product.poster}'>
      <h4>${product.name}</h4>
    `
  })
  res.send(html)
})
