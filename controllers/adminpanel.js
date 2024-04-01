const path = require('path');


class AdminPanel {
    static getAllUser = (req, res) => {
        // we have set file path of admin-dashboard.html !
        const filePath = path.join(process.cwd(), 'dist','aprycot','html','dashboard','dist','dashboard','admin-dashboard.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            // if path will not match it will render error!
            console.error('Error sending file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('File sent successfully');  
        }
    });
       
    }
}


module.exports = AdminPanel;
