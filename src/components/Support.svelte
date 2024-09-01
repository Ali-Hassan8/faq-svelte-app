<script>

    const link = 'mailto:support@igenapps.com?subject=Need Help&body=Device: (eg. iPhone XR, Galaxy S9),%0D%0AOperating System: (eg. iOS, Android),%0D%0AVersion: (eg. iOS 13.4, Android 7)%0D%0A *Please provide screenshots%0D%0A';

</script>

<a href={link} aria-label="Support" id="support-link">

    <svg height="22px" viewBox="0 0 84 131">
        <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M0.449224959,31.5317346 C3.17794166,12.6337286 17.9861929,0 42.4807492,0 C67.4797086,0 84,14.0168237 84,34.3808883 C84,47.6043069 77.6191467,56.8606999 65.2944849,64.1776581 C53.6690947,70.9656797 50.4349636,75.2853297 50.4349636,83.7483176 C50.4349636,89.9796796 46.7698123,94.686807 38.0956025,94.686807 C32.312796,94.686807 28.6465199,90.9818731 27.0967742,83.5720054 C25.9604579,69.4670256 30.7679501,61.5329744 42.830385,54.3923284 C54.1061394,47.6043069 57.5150884,43.3728129 57.5150884,35.1742934 C57.5150884,26.9757739 50.8720083,21.1574697 40.9073881,21.1574697 C30.855359,21.1574697 24.2122789,27.4165545 23.6878252,37.1137281 C22.1320535,44.4260837 16.6087316,47.3434035 11.2096907,47.3434035 C5.81064986,47.3434035 -0.551359787,43.042653 0.449224959,31.5317346 Z M39.5,131 C31.4918711,131 25,124.508129 25,116.5 C25,108.491871 31.4918711,102 39.5,102 C47.5081289,102 54,108.491871 54,116.5 C54,124.508129 47.5081289,131 39.5,131 Z" id="Combined-Shape" fill="#ffffff"></path>
        </g>
    </svg>
</a>

<style type="text/scss">
    @import "../assets/scss/_variables.scss";

    a {
        position: fixed;
        background: var(--primary);
        width: 50px;
        height: 50px;
        bottom: 20px;
        right: 20px;
        border-radius: 50%;
        text-decoration: none;
        color: white !important;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    svg {
        fill: white;
    }
</style>