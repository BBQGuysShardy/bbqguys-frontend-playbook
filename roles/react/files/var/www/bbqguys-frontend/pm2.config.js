module.exports = {
    apps: [{
        name: "BBQGuys React frontend",
        cwd: '/var/www/bbqguys-frontend',
        script: '/usr/bin/yarn',
        args: 'testing:start',
        //interpreter: '/bin/bash',
        //instances: 3,
        env_production: {
            "NODE_ENV": "production",
            "REACT_APP_ENV": "production"
        },
        env_testing: {
            "NODE_ENV": "test",
            "REACT_APP_ENV": "test"
        },
        env_development: {
            "NODE_ENV": "development",
            "REACT_APP_ENV": "development"
        }

    }],
};
