module.exports = {
    apps: [{
        name: "BBQGuys GraphQL Server",
        cwd: '/var/www/bbqguys-graphql',
        script: 'yarn',
        args: 'test',
        //interpreter: '/bin/bash',
        //instances: 2,
        env_production: {
            "NODE_ENV": "production"
        },
        env_testing: {
            "NODE_ENV": "test"
        },
        env_development: {
            "NODE_ENV": "development"
        }
    }],
};
