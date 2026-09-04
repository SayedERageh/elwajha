<!DOCTYPE html>
<html lang="ar" >

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    @php
        $seo = $page['props']['seo'] ?? [];

        $title = $seo['meta_title'] ?? 'شركة تسويق وبرمجة بالشيخ زايد | الواجهة';
        $description = $seo['meta_description'] ?? 'شركة الواجهة ويب في الشيخ زايد متخصصة في تصميم المواقع والبرمجة والتسويق الإلكتروني.';
        $keywords = $seo['meta_keywords'] ?? 'تصميم مواقع, برمجة مواقع, تسويق إلكتروني, الشيخ زايد';
        $ogTitle = $seo['og_title'] ?? $title;
        $ogDescription = $seo['og_description'] ?? $description;
        $ogImage = $seo['og_image'] ?? 'assets/img/og.jpg';
        $canonical = $seo['canonical_url'] ?? url()->current();

        if ($ogImage && !str_starts_with($ogImage, 'http')) {
            $ogImage = asset($ogImage);
        }
    @endphp

    <title inertia>{{ $title }}</title>

    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
    @inertiaHead

    <meta name="description" content="{{ $description }}">
    <meta name="keywords" content="{{ $keywords }}">
    <meta name="author" content="الواجهة ويب">

    <link rel="canonical" href="{{ $canonical }}">

    <meta property="og:title" content="{{ $ogTitle }}">
    <meta property="og:description" content="{{ $ogDescription }}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ $canonical }}">
    <meta property="og:image" content="{{ $ogImage }}">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $ogTitle }}">
    <meta name="twitter:description" content="{{ $ogDescription }}">
    <meta name="twitter:image" content="{{ $ogImage }}">

    {{-- Favicons --}}
    <link rel="icon" type="image/png" href="{{ asset('assets/img/favicon/favicon-96x96.png') }}">
    <link rel="icon" type="image/svg+xml" href="{{ asset('assets/img/favicon/favicon.svg') }}">

    {{-- Fonts --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    {{-- CSS --}}
    <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="/assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
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