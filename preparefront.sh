FRONTEND_DIR='./frontend'
BACKEND_DIR='./src/backend'
BUILD_DIR="$FRONTEND_DIR/build"
BUILD_STATIC_DIR="$FRONTEND_DIR/build/static"
TEMPLATES_DIR="$BACKEND_DIR/templates"
STATIC_DIR="$BACKEND_DIR/static"

pushd $FRONTEND_DIR > /dev/null
echo 'Building frontend...'
npm run build
popd > /dev/null

if [ -d $TEMPLATES_DIR ]; then
  echo "Cleanup $TEMPLATES_DIR"
  rm $TEMPLATES_DIR/*
else
  echo "Creating $TEMPLATES_DIR"
  mkdir -p $TEMPLATES_DIR
fi

if [ -d $STATIC_DIR ]; then
  echo "Cleanup $STATIC_DIR"
  rm -rf "$STATIC_DIR/*"
else
  echo "Creating $STATIC_DIR"
  mkdir -p $STATIC_DIR
fi

# go to frontend build directory
CURRENT_DIR=$(pwd)

# templates
pushd "$BUILD_DIR" > /dev/null
echo "copy templates to $CURRENT_DIR/$TEMPLATES_DIR"
# copy static files from frontend buid dir to backend static dir
find . -maxdepth 1 -mindepth 1 -type f -exec cp -t "$CURRENT_DIR/$TEMPLATES_DIR" {} +

popd > /dev/null

# static files
pushd "$BUILD_STATIC_DIR" > /dev/null
echo "copy static to $CURRENT_DIR/$STATIC_DIR"
# copy static files from frontend buid dir to backend static dir
find . -maxdepth 1 -mindepth 1 -type d -print0 | xargs -0 -P 3 -n 10 cp -r -t "$CURRENT_DIR/$STATIC_DIR"

popd > /dev/null




