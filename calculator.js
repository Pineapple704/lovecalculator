
function calculate()
{
	const name1 = document.getElementById("name_p1").value;
	const name2 = document.getElementById("name_p2").value;
	const combined_names = name1 + name2;
	const lower_names = combined_names.toLowerCase();
	const t = count(lower_names,"t");
	const r = count(lower_names,"r");
	const u = count(lower_names,"u");
	const e = count(lower_names,"e");
	
	const first_digit = (t + r + u + e) % 10;
	
	const l = count(lower_names,"l");
	const o = count(lower_names,"o");
	const v = count(lower_names,"v");
	//const e = count(lower_names,"e");
	const second_digit = (l + o + v + e) % 10;
	
	const score = Number(String(first_digit) + String(second_digit));
	const percentage = Math.round(score/5 + 40);
	
	document.getElementById("score").innerHTML = score;
	document.getElementById("percentage").innerHTML = percentage;
	document.getElementById("result").style.display = "";
}

function count(str, ch)
{
	let sum = 0;
	for (let i=0;i<str.length;i++)
	{
		if(str[i] === ch) {sum = sum + 1;}
	}
	return sum;
}