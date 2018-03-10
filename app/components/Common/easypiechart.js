// Easypie chart Loader
// -----------------------------------

/**
 * Usage
 * <div class="easypie-chart" data-easypiechart data-percent="X" data-optionName="value"></div>
 */
export default function() {

    $(function() {

        if (!$.fn.easyPieChart) return;

        $('[data-easypiechart]').each(function() {
            var $elem = $(this);
            var options = $elem.data();
            $elem.easyPieChart(options || {});
        });
    });

}
