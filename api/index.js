module.exports = (req, res) => {
    // هذا الكود سيقوم بالرد على أي طلب HTTP يأتي لعنوان البوت
    res.status(200).send("Hello M27, your Vercel bot is running! (Your first serverless function)");
};
