desc "thumbnail"
task :thumbnail do
  IMAGE_FILES = FileList["images/spaces/**/*.jpg"]
  puts IMAGE_FILES.inspect

  IMAGE_FILES.each do |source|
    containing_dir = source.pathmap("%d")
    directory containing_dir
    sh "convert -thumbnail 300 #{source} #{source}_small"
  end
end
