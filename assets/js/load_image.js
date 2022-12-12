const logoLightFile = document.getElementById('logo__light');
const logoDarkFile = document.getElementById('logo__dark');
const favicon = document.getElementById('favicon');
const loginBack = document.getElementById('login__bg');

const logoLightPreview = document.getElementById('logo__light__preview');
const logoDarkPreview = document.getElementById('logo__dark__preview');
const faviconPreview = document.getElementById('logo__favicon__preview');
const loginBackPreview = document.getElementById('logo__login__preview');

logoLightFile.addEventListener('change',function (e) {
    let [file] = logoLightFile.files;
    logoLightPreview.src = URL.createObjectURL(file)
});

logoDarkFile.addEventListener('change',function (e) {
    let [file] = logoDarkFile.files;
    logoDarkPreview.src = URL.createObjectURL(file)
});

favicon.addEventListener('change',function (e) {
    let [file] = favicon.files;
    faviconPreview.src = URL.createObjectURL(file)
});

loginBack.addEventListener('change',function (e) {
    let [file] = loginBack.files;
    loginBackPreview.src = URL.createObjectURL(file)
});
