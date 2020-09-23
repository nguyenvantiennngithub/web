                                const express = require('express');
                                const morgan = require('morgan');
                                const path = require('path');
                                const exphbs = require('express-handlebars');
                                const { UV_FS_O_FILEMAP } = require('constants');
                                const router = require('./router/index.router');
                                const app = express();

                                app.use(morgan('combined'));

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

                                app.use(express.static(path.join(__dirname, 'public')));
                                                app.set('views', path.join(__dirname, 'resources', 'views'));
                                                app.use(express.urlencoded({ extended: true }));
                                                app.use(express.json());

router(app);

app.listen(8080);
