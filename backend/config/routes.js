module.exports = app => {
    app.route('/tasks')
        .post(app.api.task.save)
        .get(app.api.task.get)

    app.route('/tasks/:id')
        .put(app.api.task.save)
        .get(app.api.task.getById)
        .delete(app.api.task.remove)
        
}