document.getElementById('rcmForm').addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('loader').style.display = 'block';
    setTimeout(function(){
        document.getElementById('loader').style.display = 'none';
        document.getElementById('report').innerHTML = "<h2>Report Generated!</h2><p>Claims Rejection Rate: 10%</p>";
    }, 3000);
});

