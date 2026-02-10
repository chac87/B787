<%*
const input = await tp.system.prompt("Eintrag (Label;Wert)", "");
if (input) {
    const [label, value] = input.split(";");
    // WICHTIG: Kein Zeilenumbruch vor oder nach dem HTML!
    tR += `<span class="ch-row"><span class="ch-label">${label}</span><span class="ch-dots"></span><span class="ch-val">${value}</span></span>`;
}
%>