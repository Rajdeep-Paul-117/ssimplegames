var c=0;
function value(box){
	var box=document.getElementById(box);
	if(c%2==0&&box.innerHTML!='O')
	{
		box.innerHTML='X';
		box.style.color="white";
		box.style.backgroundColor="blue";
		c++;
		trn.innerHTML="PLAYER 2's TURN";
	}
	else if(box.innerHTML!='X')
	{
		box.innerHTML='O';
		box.style.color="white";
		box.style.backgroundColor="green";
		c++;
		trn.innerHTML="PLAYER 1's TURN";
	}
	array=[
		[box1.innerHTML,box2.innerHTML,box3.innerHTML],
		[box4.innerHTML,box5.innerHTML,box6.innerHTML],
		[box7.innerHTML,box8.innerHTML,box9.innerHTML],
	];
	var result=document.getElementById('result');
	for(var i=0;i<3;i++)
	{
		if(array[i][0]==array[i][1]&&array[i][1]==array[i][2])
		{
			if(array[i][0]=='X'||array[i][0]=='O')
			{
			$('#exampleModalCenter').modal('show');
			if(array[i][0]=='X')
			result.innerHTML="PLAYER 1 HAS WON";
			else
			result.innerHTML="PLAYER 2 HAS WON";
			break;
			}
		}
		else if(array[0][i]==array[1][i]&&array[1][i]==array[2][i])
		{
			if(array[0][i]=='X'||array[0][i]=='O')
			{
			$('#exampleModalCenter').modal('show');
			if(array[0][i]=='X')
			result.innerHTML="PLAYER 1 HAS WON";
			else
			result.innerHTML="PLAYER 2 HAS WON";
			break;
			}
		}
		else if(array[0][0]==array[1][1]&&array[1][1]==array[2][2])
		{
			if(array[0][0]=='X'||array[0][0]=='O')
			{
			$('#exampleModalCenter').modal('show');
			if(array[0][0]=='X')
			result.innerHTML="PLAYER 1 HAS WON";
			else
			result.innerHTML="PLAYER 2 HAS WON";
			break;
			}
		}
		else if(array[0][2]==array[1][1]&&array[1][1]==array[2][0])
		{
			if(array[0][2]=='X'||array[0][2]=='O')
			{
			$('#exampleModalCenter').modal('show');
			if(array[0][2]=='X')
			result.innerHTML="PLAYER 1 HAS WON";
			else
			result.innerHTML="PLAYER 2 HAS WON";
			break;
			}
		}
		else if(c==9)
		{
			$('#exampleModalCenter').modal('show');
			result.innerHTML="DRAW";
			break;
		}
	}
}
