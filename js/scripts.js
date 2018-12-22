$(function(){
var people = [
    {
        name: 'Ana',
        rate: '70'
    },
    {
        name: 'John',
        rate: '65'
    },
    {
        name: 'Mark',
        rate: '120'
    },
    {
        name: 'Lisa',
        rate: '85'
    }
]

var results = [];
people.forEach(function(person){
    if(person.rate >=60 && person.rate <= 90){
        results.push(person);
        console.log(results);              
    }    
});
var $tableHead = $('<thead></thead>');
$tableHeadTr = $('<tr></tr>');
var $tableHeadName = $('<td></td>');
$tableHeadName.text('Name');
$tableHeadRate = $('<td></td>');
$tableHeadRate.text('Rate');
$tableHeadTr.append($tableHeadName);
$tableHeadTr.append($tableHeadRate);
$tableHead.append($tableHeadTr);
var $table = $('<tbody></tbody>');

for(var i = 0; i<results.length; i++){
    var person = results[i];
    var $row = $('<tr></tr>');
    var $tdName = $('<td></td>');
    var $tdRate = $('<td></td>');
    $tdName.text(person.name);
    $tdRate.text(person.rate);
    $row.append($tdName);
    $row.append($tdRate);
    $table.append($row);
}
$('body').append($tableHead);
$('body').append($table);
})
