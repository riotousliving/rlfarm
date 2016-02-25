# rlfarm deployment

This is the playbook and roles for doing a deploy the rlfarm Pyramid app.

`ansible-playbook -u root -i digitalocean rlfarm.yaml`

`ansible-playbook -u wwitzel -b --become_user=root -i gce rlfarm.yaml`
