# Base Playbook

This Ansible playbook will configure our servers with a common configuration that exists across all servers. This includes tasks such as maintaining groups and users as well as applying security updates.

## Requirements
* Ansible 2.10+

## Roles

### Packages
Installs common packages required for all servers.

### Security Updates
This is a simple role used to install security related updates.

#### Tasks
* `Apply security updates`
	- Applies security updates via the yum package manager.

### Users
This role will be used to maintain our users on the servers.

#### Tasks
* `Ensure developer group exists`
	- Ensures that the `developer` group exists. If it does not, create it.
* `Add users`
	- Maintains our list of users on the servers.
	- Sets the user's groups based on their entry in the `users` list in `vars/`.
	- This can be used to create new users, as well as remove old ones.
* `Copy ssh keys`
	- Adds the ssh public key specified in the `users` dictionary in `vars/` to the use's `authorized_keys` file.
	
#### Vars
The dictionary `users` list holds a dictionary of users. Each dictionary has the following fields:
* name
	- The user's name
* password
	- A hash of the users password on the server. This can be created multiple ways, but one of the simplest would be to run your password through `mkpasswd --method=sha-512` and use the hash you receive from it.
* auth_key
	- This is the SSH public key that is added to the users `authorized_keys` file on the servers.
* groups
	- This is a comma separated string comprised of the lists the user should  be in.
	
## Usage
The playbook can be run using the following command:

```ansible-playbook main.yml -i "$server," -K -u root```

where `-i` is a comma separated list of servers to target, `-K` is to prompt for the root password, and `-u` is to specify the root user. Ideally, this should be run from a Jenkins job so we have a record of when and where it was run, as well as the results.
