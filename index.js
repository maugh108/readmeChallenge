const inquirer = require('inquirer');
const fs = require('fs');
const questions = [ {
                        type: "input",
                        name: "title",
                        message: "Nombre del proyecto: ",
                    },
                    {
                        type: "input",
                        name: "description",
                        message: "Descripción del proyecto (motivación, ¿por qué desarrolló el proyecto?, ¿qué problema resuelve?): ",
                    },
                    {
                        type: "input",
                        name: "install",
                        message: "Instalación (¿Cuáles son los pasos necesarios para instalar su proyecto?): ",
                    },
                    {
                        type: "input",
                        name: "use",
                        message: "Uso (Proporcione instrucciones y ejemplos de uso): ",
                    },
                    {
                        type: "input",
                        name: "url",
                        message: "URL (github pages o similar): ",
                        
                    },
                    {
                        type: "input",
                        name: "repo",
                        message: "Repo: ",
                        
                    }];


inquirer.prompt(questions).then((answers) => {
    let readMe = `
# ${answers.title}
   
## Descripción
${answers.description}
    
## Instalación
${answers.install}

## Uso
${answers.use}

## Cómo contribuir
* URL: ${answers.url}
* repositorio: ${answers.repo}`

    fs.appendFile("readme.md", readMe, (err) => err ? console.error(err) : console.log("read me creado con éxito"));
});