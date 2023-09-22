const fs = require('fs/promises');
const fsp = require("fs");

async function building() {
    const paths = [];

    // Getting all the modules in the ./public/ocinfo folder
    const content = await fs.readdir('./public/ocinfo');

    // Looping through the modules
    for(let moduleNoir of content) {

        // Checking if the module is a folder
        if(!fsp.lstatSync("./public/ocinfo/" + moduleNoir).isDirectory()) continue;
        console.log("[INFO] Found a module named : " + moduleNoir);

        // Getting the module's content
        const moduleContent = await fs.readdir(`./public/ocinfo/${moduleNoir}`);

        for(let exos of moduleContent) {
            if(!fsp.lstatSync("./public/ocinfo/" + moduleNoir + "/" + exos).isDirectory()) continue;
            console.log("[INFO] Found an exercice named : " + exos);

            // Getting the exos's content
            const exosContent = await fs.readdir(`./public/ocinfo/${moduleNoir}/${exos}`);

            // Looping through the module's content
            for(let file of exosContent) {
                // Checking if the file is an HTML file
                if(file.endsWith('.html')) {
                    // Getting the file's name
                    const fileName = file.split('.')[0];
                    console.log("[INFO][" + moduleNoir + " -> " + exos + "] Found a file named " + fileName + ".html");
                    paths.push({
                        module: moduleNoir,
                        exos: exos,
                        file: fileName + ".html"
                    });
                }
            }
        }
    }

    // Getting the template
    let data = await fs.readFile('./public/exo-liste-template.html', 'utf8').catch(err => { console.error("[ERROR] Error while loading template. Error : " + err); return; });

    // Generating the content
    let insert = "";
    for(let path of paths) {
        insert += `<li><a href="/ocinfo/${path.module}/${path.exos}/${path.file}">${path.module} -> ${path.exos} -> ${path.file}</a></li>`;
    }

    // Replacing the content
    data = data.replace("%INSERT_EXOS%", insert);

    // Writing the file
    await fs.writeFile('./public/exo-liste.html', data).catch(err => { console.error("[ERROR] Error while writing file. Error : " + err); return; });

}

building();