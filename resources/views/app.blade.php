<!DOCTYPE html>
<html lang="ar" >

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title inertia>{{ $page['props']['title'] ??  ' شركة تسويق وبرمجه بالشيخ زايد | الواجهه' }}</title>
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])

    @inertiaHead

   <meta
        name="description"
        content="شركة الواجهة ويب في الشيخ زايد متخصصة في تصميم المواقع الإلكترونية، المتاجر الإلكترونية، برمجة الأنظمة، الهوية البصرية، والدعاية والإعلان باحترافية."
    >

    <meta
        name="keywords"
        content="تصميم مواقع, شركة تصميم مواقع, الواجهة ويب, الشيخ زايد, تصميم متجر إلكتروني, برمجة مواقع, دعاية وإعلان, تصميم هوية بصرية, تصميم ويب"
    >

    <meta name="author" content="الواجهة ويب">

    <!-- Open Graph -->
    <meta property="og:title" content="الواجهة ويب | تصميم مواقع ودعاية وإعلان">
<meta property="og:description" content="شركة الواجهة ويب في الشيخ زايد متخصصة في تصميم المواقع والمتاجر الإلكترونية والدعاية والإعلان باحترافية عالية" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{{ url()->current() }}" />
<meta property="og:image" content="{{ asset('assets/img/og.jpg') }}" />


    <!-- Favicons -->
  <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('assets/img/favicon/favicon-96x96.png') }}" /> <link rel="icon" type="image/svg+xml" href="{{ asset('assets/img/favicon/favicon.svg') }}" /> <link rel="shortcut icon" href="{{ asset('assets/img/favicon/favicon.ico') }}" /> <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/img/favicon/apple-touch-icon.png') }}" /> <link rel="manifest" href="{{ asset('assets/img/favicon/site.webmanifest') }}" />

    <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link
  href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap"
  rel="stylesheet"
/>
    <!-- Vendor CSS -->
    <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="/assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

    <!-- Main CSS -->
    <link href="/assets/css/main.css" rel="stylesheet">

</head>

<body>

    @inertia

    <!-- Vendor JS -->
    <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/vendor/php-email-form/validate.js"></script>
    <script src="/assets/vendor/aos/aos.js"></script>
    <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="/assets/vendor/purecounter/purecounter_vanilla.js"></script>
    <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
    <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>

    <!-- Main JS -->
    {{-- <script src="/assets/js/main.js"></script> --}}
  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

</body>

</html>