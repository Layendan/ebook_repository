// Dependencies
require('dotenv').config();
const {
    REST
} = require('@discordjs/rest');
const {
    Routes
} = require('discord-api-types/v9');

// Create new commands
const commands = [
    {
        name: 'search',
        description: 'Search the bot\'s books',
        options: [{
                name: 'book_name',
                type: 3, // 3 = STRING option
                description: 'The name of the book you want to search for',
                required: true
            },
            {
                name: 'author_name',
                type: 3, // 3 = STRING option
                description: 'The name of the author you want to search for',
                required: false
            },
            {
                name: 'isbn',
                type: 3, // 3 = STRING option
                description: 'The ISBN of the book you want to search for',
                required: false
            }
        ]
    },
    {
        name: 'get',
        description: 'Get a book',
        options: [{
            name: 'book_id',
            description: 'The ID of the book you want to get',
            type: 4, // 4 = INTEGER option
            min_value: 0
        }]
    },
    {
        name: 'add',
        description: 'Add a book',
        options: [{
                name: 'book_name',
                type: 3, // 3 = STRING option
                description: 'The name of the book you want to add',
                required: true
            },
            {
                name: 'author_name',
                type: 3, // 3 = STRING option
                description: 'The name of the author you want to add',
                required: true
            },
            {
                name: 'isbn',
                type: 3, // 3 = STRING option
                description: 'The ISBN of the book you want to add',
                required: true
            }
        ]
    },
    {
        name: 'request',
        description: 'Request a book',
        options: [{
                name: 'book_name',
                type: 3, // 3 = STRING option
                description: 'The name of the book you want to request',
                required: true,
            },
            {
                name: 'author_name',
                type: 3, // 3 = STRING option
                description: 'The name of the author you want to request',
                required: false
            },
            {
                name: 'isbn',
                type: 3, // 3 = STRING option
                description: 'The ISBN of the book you want to request',
                required: false
            }
        ]
    },
    {
        name: 'help',
        description: 'Get help'
    }
];

// Create a new REST client
const rest = new REST({
    version: '9'
}).setToken(process.env.TOKEN);

// Works on insomnia, no idea why it doesn't work on vscode, prbly something to do with async but I don't care
// Loop through the commands and create the slash commands
for (let index = 0; index < commands.length; index++) {
    (async () => {
        try {
            console.log('Started refreshing application (/) commands.');

            const element = JSON.stringify(commands[index]);
    
            console.log(element);
    
            await rest.put(
                Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), {
                    body: element
                }
            );
    
            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    })();
}