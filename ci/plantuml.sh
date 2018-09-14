
# see http://plantuml.com/download
curl \
  -o plantuml.1.2018.10.jar \
  https://netix.dl.sourceforge.net/project/plantuml/1.2018.10/plantuml.1.2018.10.jar


# see http://plantuml.com/ascii-math
curl \
  -o plantuml-jlatexmath.zip \
  http://beta.plantuml.net/plantuml-jlatexmath.zip

unzip plantuml-jlatexmath.zip

java \
  -cp jlatexmath-minimal-1.0.3.jar -jar \
  plantuml.1.2018.1.jar \
  -tpng \
  -o public \
  doc/flow.puml
