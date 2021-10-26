//페이지 목록 생성
function getPagination(data){
	//페이지 목록 생성
	let str = "";
	if(data.pm.prev){
		str += "<a href='" + (data.pm.startPage-1) + "'>이전</a>";
	}
	for(var i = data.pm.startPage; i <= data.pm.endPage; i++){
		str += "<a href='" + i + "'>" + i + "</a>&nbsp;";
	}
	
	if(data.pm.next){
		str += "<a href='" + (data.pm.endPage+1) + "'>다음</a>";
	}
	
	return str;
}