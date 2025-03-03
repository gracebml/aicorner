source "https://rubygems.org"

# Sử dụng gem github-pages cho GitHub Pages
gem "github-pages", group: :jekyll_plugins

# Plugin Jekyll phổ biến
group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-sitemap" 
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1.2.10"
  gem "tzinfo-data"
end

# THAY ĐỔI NÀY - chỉ sử dụng wdm nếu phiên bản Ruby < 3.4
if RUBY_VERSION < "3.4" && Gem.win_platform?
  gem "wdm", "~> 0.1.1"
end

# Thêm webrick vì nó không còn được đính kèm mặc định trong Ruby >= 3.0
gem "webrick"