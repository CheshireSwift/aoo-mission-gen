module.exports = plop => {
  plop.setHelper('times', (n, block) => {
    let acc = ''
    for (let i = 1; i <= n; i++) {
      acc += block.fn(i)
    }
    return acc
  })

  plop.setGenerator('component', {
    description: 'React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{properCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
    ],
  })

  plop.setGenerator('generator', {
    description: 'Generator component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Generator name',
      },
      {
        type: 'number',
        name: 'options',
        message: 'Number of options',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/generators/{{properCase name}}.tsx',
        templateFile: 'templates/generator.tsx.hbs',
      },
    ],
  })

  plop.setGenerator('mission', {
    description: 'Mission type component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Mission name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/generators/missions/{{properCase name}}.tsx',
        templateFile: 'templates/missiontype.tsx.hbs',
      },
    ],
  })
}
