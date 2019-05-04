module.exports = app => {
    const save = async (req, res) => {
        const task = {
            ...req.body
        };
        if (req.params.id) task.id = req.params.id

        if (task.id) {
            app.db('tasks').update(task)
                .where({
                    id: task.id
                })
                .then(_ => res.status(200).send(task))
                .catch(err => res.status(500).send(err))
        } else {
            app.db('tasks').insert(task)
                .then(_ => res.status(200).send(task))
                .catch(err => res.status(500).send(err))
        }

    }

    const get = (req, res) => {
        app.db('tasks')
            .select('*')
            .then(tasks => res.json(tasks))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('tasks')
            .select('*').where({
                id: req.params.id
            })
            .first()
            .then(task => res.json(task))
            .catch(err => res.status(500).send(err))
    }

    const remove = (req, res) => {
        app.db('tasks')
            .where({
                id: req.params.id
            })
            .del()
            .then((result) => {
                console.log(result);
                res.sendStatus(200).send(result)
            })
            .catch(err => res.status(500).send(err))
    }

    return {
        save,
        get,
        getById,
        remove
    }
}