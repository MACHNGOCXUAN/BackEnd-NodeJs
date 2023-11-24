

const getHomepage=(req,res)=>{
    res.send("hello nodejs javascript");
}

const getViews=(req,res)=>{
    res.send("hbhbdhs");
}

const getIMG=(req,res)=>{
    res.render("sample.ejs");
}

module.exports={
    getHomepage,getViews,getIMG
}