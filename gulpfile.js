var gulp    = require('gulp'),
    sass    = require('gulp-sass')(require('sass')),
    connect = require('gulp-connect'),
    pug     = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    rename  = require('gulp-rename'),
    uglify  = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer');

function reload(done) {
  connect.server({
    livereload: true,
    port: 8080
  });
  done();
}


function styles() {
  return (
    gulp.src('src/sass/styles.sass')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 3 versions'],
      cascade: false
    }))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('assets/css'))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('assets/css'))
    .pipe(connect.reload())
  );
}


function scripts() {
  return (
    gulp.src('src/js/scripts.js')
    .pipe(plumber())
    .pipe(gulp.dest('assets/js'))
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('assets/js'))
    .pipe(connect.reload())
  );
}

function html() {
  return (
    gulp.src('*.html')
    .pipe(plumber())
    .pipe(connect.reload())
  );
}

function views() {
  return (
    gulp.src('src/pug/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./views'))
    .pipe(connect.reload())
  )
}


function watchTask(done) {
  gulp.watch('*.html', html);
  gulp.watch('src/sass/**/*.sass', styles);
  gulp.watch('src/js/scripts.js', scripts);
  gulp.watch('src/pug/**/*.pug', views);
  done();
}

const watch = gulp.parallel(watchTask, reload);
const build = gulp.series(gulp.parallel(styles, scripts, html, views));

exports.reload = reload;
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.views = views;
exports.watch = watch;
exports.build = build;
exports.default = watch;

const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/alerts', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'alerts.html'));
});
router.get('/avatars', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'avatars.html'));
});
router.get('/badges', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'badges.html'));
});
router.get('/breadcrumbs', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'breadcrumbs.html'));
});
router.get('/buttons', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'buttons.html'));
});
router.get('/cards', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'cards.html'));
});
router.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'dashboard.html'));
});
router.get('/dropdown', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'dropdown.html'));
});
router.get('/empty-states', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'empty-states.html'));
});
router.get('/forms', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'forms.html'));
});
router.get('/icons', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'icons.html'));
});
router.get('/links', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'links.html'));
});
router.get('/modals', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'modals.html'));
});
router.get('/navigation', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'navigation.html'));
});
router.get('/pagination', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'pagination.html'));
});
router.get('/progress', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'progress.html'));
});
router.get('/tables', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'tables.html'));
});
router.get('/tags', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'tags.html'));
});
router.get('/toasts', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'toasts.html'));
});
router.get('/tooltips', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'tooltips.html'));
});

// PAGES

router.get('/account', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'account.html'));
});

router.get('/billing', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'billing.html'));
});

router.get('/brands', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'brands.html'));
});

router.get('/brands', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'brand-profile.html'));
});

router.get('/notifications', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'notifications.html'));
});

router.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'profile.html'));
});

router.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'users.html'));
});

// HEADERS

router.get('/headers', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'headers.html'));
});

// TABS

router.get('/tabs', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'tabs.html'));
});

// PAGES

// USER PROFILE

router.get('/settings', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'settings.html'));
});

router.get('/user-profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'user-profile.html'));
});