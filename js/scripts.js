$(function () {
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

    var $minRate = $('#minRate');
    var $minRateVal = $('#minRateVal');
    var $maxRate = $('#maxRate');
    var $maxRateVal = $('#maxRateVal');
    $minRate.on('input', function(){
        $minRateVal.html(this.value);
    });  
    $maxRate.on('input', function(){
        $maxRateVal.html(this.value);
    })

    $('#btn').on('click', function () {
        var $minVal = $('#minRate').val();
        var $maxVal = $('#maxRate').val();
        if($minVal != '' && $maxVal != ''){
        // The following two lines check if there is a table in the DOM in order to delete it everytime the search button is clicked on
        var $tables = $('table');
        $tables.remove(); 
        var results = [];
        people.forEach(function (person) {
            if (person.rate >= $minVal && person.rate <= $maxVal) {
                results.push(person);
                console.log(results);
            }
        });
        var $tableFull = $('<table></table>');
        var $tableHead = $('<thead></thead>');
        var $tableHeadTr = $('<tr></tr>');
        var $tableHeadName = $('<td></td>');
        $tableHeadName.text('Name');
        $tableHeadRate = $('<td></td>');
        $tableHeadRate.text('Rate');
        $tableHeadTr.append($tableHeadName);
        $tableHeadTr.append($tableHeadRate);
        $tableHead.append($tableHeadTr);
        var $table = $('<tbody></tbody>');

        for (var i = 0; i < results.length; i++) {
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
        $($tableFull).append($tableHead);
        $($tableFull).append($table);
        $('body').append($tableFull);
    }
})
})
