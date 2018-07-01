// Select color input
	let color = $('#colorPicker');

// Select size input
	let height = $('#inputHeight');
	let weight = $('#inputWeight');

// When size is submitted by the user, call makeGrid()
	$('#sizePicker').submit(function(e){
		e.preventDefault();
		makeGrid();
	});

function makeGrid() {
// Your code goes here!

	$('.tableBody').remove("tbody");
	let tableBody = $('<tbody></tbody>').addClass('tableBody');
	let inputHeight = height.val();
	let inputWeight = weight.val();

	let i = 0;
	while (i < inputHeight){
		let row = $('<tr></tr>');

		for(let j = 0; j < inputWeight; j++){
			let rowData = $('<td></td>');
			row.append(rowData);
		};

		tableBody.append(row);
		i++;
	};

	$('#pixelCanvas').append(tableBody);

	$('td').click(function(e) {
		let target = $(e.target);
		let cellColor = color.val();

		if ( target.css('background-color') === 'rgba(0, 0, 0, 0)') {
			target.css('background-color', cellColor);
		} else {
		 	target.css('backgroundColor', 'rgba(0, 0, 0, 0)');
		}
	});

}




