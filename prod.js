if(!g_form && gsft_main) var g_form = gsft_main.g_form;
if(!g_user && gsft_main) var g_user = gsft_main.g_user;

let path = top.location.pathname;

if (g_user.hasRoleExactly('security_admin')) {
    return; //break glass by elevating
}

g_form.elements
    .filter((el) => {
        if (el.type == 'script' || el.type == 'script_plain' || el.type == 'xml') return true;
    })
    .map((el) => el.fieldName)
    .forEach((fieldName) => {
        g_form.setReadOnly(fieldName, true);
        g_form.showFieldMsg(fieldName, 'Set read only because you are in prod', 'info', false);
    });
let dangerousPaths = ['script', 'sysauto'];
for (var p of dangerousPaths) {
    console.log(p);
    if (path.includes(p)) {
        console.log('true', p);
        g_form.addInfoMessage('Warning: You are in production, careful what you change');
    } else {
        console.log('false', p);
    }
}
