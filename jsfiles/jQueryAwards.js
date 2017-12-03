$(document).ready(function() {
	
	$('#imageText').hide(0).delay(225).fadeIn(2500);
	
	//variable to keep track of which bullet has its text displayed. Avoids repeat or distraction of same
	//text being continuously faded in if cursor goes out and back in due to slight movements.
	var currentBullet = '';

	$("#teamLeadershipBullet").mouseenter(function() {
		$(this).css('font-size', '1.25em').css('font-weight', 'bold');
		$("#engineeringExcellenceBullet").css('font-weight', 'normal');
		$("#individualRecruitingBullet").css('font-weight', 'normal');		
		$("#teamRecruitingBullet").css('font-weight', 'normal');
		$('.right').css('width', '30%');
        $("#imageContainer").attr('src', "./images/teamLeadership.jpg");
		if (currentBullet != 'teamLeadership') {
			currentBullet = 'teamLeadership';			
			$("#imageText").html('This multi-week training taught us how to manage interactions with all levels of colleagues.').hide(0).delay(100).fadeIn(1500);
		}
		}).mouseleave(function() {$(this).css('font-size', '1em');
	});


	$("#engineeringExcellenceBullet").mouseenter(function() {
		$(this).css('font-size', '1.25em').css('font-weight', 'bold');
		$("#teamLeadershipBullet").css('font-weight', 'normal');
		$("#individualRecruitingBullet").css('font-weight', 'normal');		
		$("#teamRecruitingBullet").css('font-weight', 'normal');
		$('.right').css('width', '2	0%');		
        $("#imageContainer").attr('src', "./images/engineeringExcellence.jpg");
		if (currentBullet !='engineeringExcellence') {
			currentBullet = 'engineeringExcellence';			
			$("#imageText").html('Awarded for exceeding expectations in my role as an R&D engineer.').hide(0).delay(100).fadeIn(1500);
		}
		}).mouseleave(function() {$(this).css('font-size', '1em');
	});	

	$("#individualRecruitingBullet").mouseenter(function() {
		$(this).css('font-size', '1.25em').css('font-weight', 'bold');
		$("#teamLeadershipBullet").css('font-weight', 'normal');
		$("#engineeringExcellenceBullet").css('font-weight', 'normal');		
		$("#teamRecruitingBullet").css('font-weight', 'normal');		
        $("#imageContainer").attr('src', "./images/individualRecruiting.jpg");
		if (currentBullet != 'individualRecruiting') {
			currentBullet = 'individualRecruiting';
			$("#imageText").html('Awarded for individual efforts as host, campus recruiter, interviewer, and follow-up contact for candidates offered employment.').hide(0).delay(100).fadeIn(1500);	
		}
		}).mouseleave(function() {$(this).css('font-size', '1em');
	});	

	$("#teamRecruitingBullet").mouseenter(function() {
		$(this).css('font-size', '1.25em').css('font-weight', 'bold');
		$("#teamLeadershipBullet").css('font-weight', 'normal');
		$("#engineeringExcellenceBullet").css('font-weight', 'normal');
		$("#individualRecruitingBullet").css('font-weight', 'normal');		
        $("#imageContainer").attr('src', "./images/teamRecruiting.jpg");
		if (currentBullet != 'teamRecruiting') {
			currentBullet = 'teamRecruiting';
			$("#imageText").html('Awarded for being a key contributor to one of two top performing campus teams.').hide(0).delay(100).fadeIn(1500);				
		}
		}).mouseleave(function() {$(this).css('font-size', '1em');
	});
	
});
