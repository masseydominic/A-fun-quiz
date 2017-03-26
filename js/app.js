(function (){

	'use strict';
	angular.module("quiz", ['AngularChart'])
	.controller("quizController", quizController)
	// .service("toDoService", toDoService);
	.directive('ripple', function($timeout) {
		console.log("hello idiot");
    return {
        restrict: 'C',
        link: function(scope, element, attrs) {
            element.on('click', function(event) {
                event.preventDefault();

                var $div = angular.element('<div></div>'),
                    btnOffset = $(this).offset(),
                    xPos = event.pageX - btnOffset.left,
                    yPos = event.pageY - btnOffset.top;

                $div.addClass('ripple-effect');
                var $ripple = angular.element(".ripple-effect");

                $ripple.css("height", $(this).height());
                $ripple.css("width", $(this).height());
                $div.css({
                        top: yPos - ($ripple.height() / 2),
                        left: xPos - ($ripple.width() / 2),
                        background: $(this).data("ripple-color")
                    })
                    .appendTo($(this));

                $timeout(function() {
                    $div.remove();
                }, 1500);
            });
        }
    }

});

	quizController.$inject=['$timeout'];
	function quizController($timeout){
		var qc = this;
		qc.x="Test your IQ";
		qc.y=0;
		qc.name='';
		qc.impinfo=0;
		qc.impans=0;
		qc.ans='';
		qc.ans2='';
		qc.ans3='';
		qc.ans4='';
		qc.ans5='';
		qc.result=0;

		qc.start = function(){
			if(qc.name==''){
				qc.impinfo=10;
				qc.y=0;
				return ;
			}
			qc.y=qc.y+1;
		}



		qc.first = function(){
            $timeout(function() { 
           		if(qc.ans==''){
				qc.impans=11;
				return ;

			}
			if(qc.ans=="Madrid"){
				qc.result=qc.result+1;
			}
			qc.y=qc.y+1;
                }, 1000);
		}

		qc.second = function(){
			$timeout(function() {
				if(qc.ans2==''){
				qc.impans=12;
				return ;

			}
			if(qc.ans2=="Lionel Messi"){
				qc.result=qc.result+1;
			}
			qc.y=qc.y+1;
		}, 1000);
			
		}
		qc.third = function(){
			$timeout(function() {
				if(qc.ans3==''){
				qc.impans=13;
				return ;

			}
			if(qc.ans3=="Stephen Curry"){
				qc.result=qc.result+1;
			}
			qc.y=qc.y+1;
			}, 1000);
			
		}

		qc.fourth = function(){
			$timeout(function() {
				if(qc.ans4==''){
				qc.impans=14;
				return ;

			}
			if(qc.ans4=="Virat Kohli"){
				qc.result=qc.result+1;
			}
			qc.y=qc.y+1;
			}, 1000);
			
		}



		qc.back = function(){
			qc.y = qc.y+1;
		}



		qc.chr = function () { 
			$timeout(function() {
					if(qc.ans5==''){
				qc.impans=15;
				return ;

			}
			if(qc.ans5=="Leonardio di Caprio"){
				qc.result=qc.result+1;
			}

			qc.y=qc.y+1;
						console.log(qc.y);
    	var myChart = Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Test Analysis'
        },
        xAxis: {
            categories: ['Total', 'Correct', 'Incorrect']
        },
        yAxis: {
            title: {
                text: 'Score'
            }
        },
        series: [{
            name: qc.name,
            data: [5, qc.result, 5-qc.result]
        }]
    });
			}, 1000);
		
};

		qc.res = function(){
			qc.y=qc.y+1;
		}
	}
})();