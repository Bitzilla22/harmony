document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var selectedDate = null;

    var calendar = new FullCalendar.Calendar(calendarEl, {
        showNonCurrentDates: true,
        validRange: function (nowDate) {
            return {
                start: nowDate
            };
        },
        dayCellDidMount: function (cellInfo) {

            if (cellInfo.el.innerText.trim() === '') {
                var dayNumber = cellInfo.date.getDate();
                var dayNumberElement = cellInfo.el.querySelector('.fc-daygrid-day-number');
                if (dayNumberElement) {
                    dayNumberElement.innerText = dayNumber;
                }
            }

            if (cellInfo.dateStr === selectedDate) {
                cellInfo.el.classList.add('selected-date');
            }
        },
        dateClick: function (info) {

            var date = new Date(info.dateStr);
            var options = { weekday: 'long', month: 'long', day: 'numeric' };
            var formattedDate = date.toLocaleDateString('en-US', options);
            showTime(formattedDate);

            var allDayCells = calendarEl.querySelectorAll('.fc-daygrid-day');
            allDayCells.forEach(function (cell) {
                cell.classList.remove('selected-date');
            });


            info.dayEl.classList.add('selected-date');
            selectedDate = info.dateStr;
        },
        datesSet: function (dateInfo) {

            var allDayCells = calendarEl.querySelectorAll('.fc-daygrid-day');
            allDayCells.forEach(function (cell) {
                cell.classList.remove('selected-date');
            });

            allDayCells.forEach(function (cell) {
                if (cell.getAttribute('data-date') === selectedDate) {
                    cell.classList.add('selected-date');
                }
            });
        }
    });

    function showTime(formattedDate) {

        $('.date-to-call').text(formattedDate);

        $('.time-picker').addClass('active');
    }

    $('.time-el').on('click', function () {

        $('.time-el').removeClass('active');

        $(this).addClass('active');

        $('.cont-btn-pop').removeClass('disabled');
    });
    $(".btn-open-pop").on('click', function () {
        $(".popup-overlay").addClass('active');
        calendar.render();
    });
    $('.cont-btn-pop').on('click', function () {
        if (!$(this).hasClass('disabled')) {
            $(".date-picker").addClass('disabled');
            $(".first-controll").addClass('disabled');
            $(".time-dur-picker").addClass('active');
            $(".sec-controll").addClass('active');
        }
    });
    $('.cancel-btn-pop-sec').on('click', function () {
        $(".date-picker").removeClass('disabled');
        $(".first-controll").removeClass('disabled');
        $(".time-dur-picker").removeClass('active');
        $(".sec-controll").removeClass('active');
        $(".duration-text").text("Not chosen");
        $('.duration-el').removeClass('active');
    });
    $(".cancel-btn-pop").on('click', function () {
        $(".date-picker").removeClass('disabled');
        $(".first-controll").removeClass('disabled');
        $(".time-dur-picker").removeClass('active');
        $(".sec-controll").removeClass('active');
        $(".duration-text").text("Not chosen");
        $('.duration-el').removeClass('active');
        $(".time-el").removeClass('active');
        $('.fc-daygrid-day-number').removeClass('active');
        $(".time-picker").removeClass('active');
        $(".popup-overlay").removeClass('active');
    });
    $('.duration-el').on('click', function () {
        $('.duration-el').removeClass('active');
        $(this).addClass('active');
        var callDuration = $(this).text();
        $(".duration-text").text(callDuration);
        $(".clock-set").addClass('active');
        $('.cont-btn-pop-sec').removeClass('disabled');
    });
    $('.cont-btn-pop-sec').on('click', function () {
        var firstLetter = 'r';
        var randomNumber = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
        var code = firstLetter + randomNumber;

        var generatedCode = 'r28481400';
        $(".unicide").text(generatedCode);
        $('.get-link').addClass('active');
        $('.sec-controll').removeClass('active');
        $('.third-controll').addClass('active');
        $(".time-dur-picker").removeClass('active');
        $(".sec-controll").removeClass('active');
        $('.duration-el').removeClass('active');
    });
    $('.close-btn-pop-sec').on('click', function () {
        $("body").removeClass('lock');
        $(".date-picker").removeClass('disabled');
        $(".first-controll").removeClass('disabled');
        $(".time-dur-picker").removeClass('active');
        $(".sec-controll").removeClass('active');
        $(".duration-text").text("Not chosen");
        $('.duration-el').removeClass('active');
        $(".time-el").removeClass('active');
        $('.fc-daygrid-day-number').removeClass('active');
        $(".time-picker").removeClass('active');
        $(".popup-overlay").removeClass('active');
        $(".date-picker").removeClass('disabled');
        $(".first-controll").removeClass('disabled');
        $(".time-dur-picker").removeClass('active');
        $(".sec-controll").removeClass('active');
        $(".duration-text").text("Not chosen");
        $('.duration-el').removeClass('active');
        $('.get-link').removeClass('active');
        $('.fisrt-svg').removeClass('disabled');
        $('.sec-svg').addClass('disabled');
        $('.third-controll').removeClass('active');
    });
});
