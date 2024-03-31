const path = require('path');


class AdminPanel {
    static getAllUser = (req, res) => {
        const filePath = path.join(process.cwd(), 'dist','aprycot','html','dashboard','dist','dashboard','admin-dashboard.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('File sent successfully');
        }
    });
       
    }
}


module.exports = AdminPanel;
