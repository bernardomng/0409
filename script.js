function Enviar() {
    var table = document.querySelector("table")
    
    var pront, name, email, data, per, extras, sat, cursos;
    pront = document.frmDados.pront.value;
    name = document.frmDados.name.value;
    email = document.frmDados.email.value;
    data = document.frmDados.data.value;
    if (document.frmDados.per.value == "m") { man = "X"} else {man = ""}
    if (document.frmDados.per.value == "t") { tar = "X"} else {tar = ""}
    if (document.frmDados.per.value == "n") { noi = "X"} else {noi = ""}
    cursos = document.frmDados.curso.value;
    extras = "";
    extras += (document.frmDados.interesse1.checked?document.frmDados.interesse1.value:"");
    extras += ((document.frmDados.interesse2.checked&&extras!="")?", ":"");
    extras += (document.frmDados.interesse2.checked?document.frmDados.interesse2.value:"");
    extras += ((document.frmDados.interesse3.checked&&extras!="")?", ":"");
    extras += (document.frmDados.interesse3.checked?document.frmDados.interesse3.value:"");
    sat = document.frmDados.sat.value;

    var form = document.querySelector("form")
    form.innerHTML = ""

        table.innerHTML = `
    
        <tr>
        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvKGiIoFhd9ndV_aTGUuU__tBcAwAmG9llG6HkV5L&s"></td>
        <td colspan="2"></td>
        </tr>
        <tr>
        <td colspan="2">Prontuário: ${pront}</td>
        <td>Satisfação<br>${sat}%</td>
        </tr>
        <tr>
        <td colspan="3">Nome: ${name}</td>
        </tr>
        <tr>
        <td colspan="3">Email: ${email}</td>
        </tr>
        <tr>
        <td colspan="2">Curso: ${cursos}</td>
        <td>Ingresso: ${data}</td>
        </tr>
        <tr>
        <td colspan="3">Periodo: </td>
        </tr>
        <tr>
        
        <td>(${man}) Manhã</td>
        <td>(${tar}) Tarde</td>
        <td>(${noi}) Noite</td>
        </tr>
        <tr>
        <td rowspan="2" colspan="3">
        Atividades Extras:
        ${extras}
        </td>
        </tr>
        `
    
    
}