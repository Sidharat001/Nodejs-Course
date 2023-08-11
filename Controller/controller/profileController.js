const myprofile = (req, res) => {
    const profileId = req.params.id;
    if (profileId != 0 && profileId !== undefined)
        res.send(`My Profile Id ${profileId} has been updated successfully`);
    else
        res.send('Your profile has been missing');

};

module.exports = { myprofile }