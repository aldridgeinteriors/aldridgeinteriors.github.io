desc "thumbnail"
task :thumbnail do
  IMAGE_FILES = FileList["images/projects/**/*.jpg"]
  puts IMAGE_FILES.inspect

  IMAGE_FILES.each do |source|
    containing_dir = source.pathmap("%d")
    directory containing_dir
    sh "convert -thumbnail 500 #{source} #{source}"
  end
end
