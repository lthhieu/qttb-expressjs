const helloWorld = (req, res) => {
    return res.render("home.ejs");
}


module.exports = {
    helloWorld
}