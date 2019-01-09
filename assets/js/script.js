$(document).ready(function(){
  var dataTable = $('#example').DataTable({
            		aaSorting: [[1, 'asc']],
			dom: 'Bfrtip',
			buttons: ["excel"]
		});
  
  	$(".buttons-excel > span").text("Export as Excel")
	$(".dataTables_filter").append('<div class="add-record" type="button" data-toggle="modal" data-target="#myModal">Add New Movie</div>');
	$(".dt-buttons").addClass("align-right");
	// $(".dt-buttons").css("margin-top","3px");
	$(".buttons-excel").addClass("add-record");
    	$(".buttons-excel").removeClass("btn");
  	$(".buttons-excel").removeClass("btn-default");

		$(".add-all-records").click(function(){
			var f1 = $(".security").val();
			var field1 = '<input type="text" name="data1" id="data1" value="'+f1+'" onblur="saveData(this,event)"><span style="display:none">'+f1+'</span>';

			var f2 = $(".security-desc").val();
			var field2 = '<input class="find-new-row" type="text" name="data2" id="data2" value="'+f2+'" onblur="saveData(this,event)"><span style="display:none">'+f2+'</span>';

			var f3 = $(".t-value").val();
			var field3 = '<input type="text" name="data3" id="data3" value="'+f3+'" onblur="saveData(this,event)"><span style="display:none">'+f3+'</span>';

			var f4 = $(".threshold").val();
			var field4 = '<input type="text" name="data4" id="data4" value="'+f4+'" onblur="saveData(this,event)"><span style="display:none">'+f4+'</span>';
			
			var f5 = $(".alert-r").val();
			var field5 = '<input type="text" name="data5" id="data5" value="'+f5+'" onblur="saveData(this,event)"><span style="display:none">'+f5+'</span>';

			var f6 = $(".alert-s").val();
			var field6 = '<input type="text" name="data6" id="data6" value="'+f6+'" onblur="saveData(this,event)"><span style="display:none">'+f6+'</span>';
      
      		var f7 = $(".movie-status").val();
			var field7 = '<input type="text" name="data6" id="data6" value="'+f7+'" onblur="saveData(this,event)"><span style="display:none">'+f7+'</span>';

			if(f1!="" && f2 != "" && f3 != "" && f4 != "" && f5 != "" && f6 != "" && f7 != ""){
			dataTable.row.add([
				field1,
				field2,
				field3,
				field4,
				field5,
				field6,
                field7
			  ]).draw(false);

			  var rowCount = $('#example').DataTable().rows().count();
			$(".append-row").find(".find-new-row").parent().parent().attr("id","row"+JSON.stringify(rowCount));

			  $('.modal').modal('hide');
			  $(".fill-field").hide();

			  $(".security").val("");
			  $(".security-desc").val("");
			  $(".t-value").val("");
			  $(".threshold").val("");
			  $(".alert-r").val("");
			  $(".alert-s").val("");
              $(".movie-status").val("");
			}else{
				$(".fill-field").show();
			}	
		});


// Function close
	});
function saveData(current,event){
	current.value = event.target.value;
	console.log(event.target.value);

	var temp = $('#example').DataTable().row(parseInt(current.parentElement.parentElement.id.substr(3,current.parentElement.parentElement.id.length-1))-1).data();

	temp[parseInt(current.id.substr(4,current.id.length-1))-1] = '<input type="text" name="'+current.id+'" id="'+current.id+'" value="'+event.target.value+'" onblur="saveData(this,event)"><span style="display:none">'+event.target.value+'</span>';

	$('#example').DataTable().row(parseInt(current.parentElement.parentElement.id.substr(3,current.parentElement.parentElement.id.length-1))-1).data(temp).draw();

}
