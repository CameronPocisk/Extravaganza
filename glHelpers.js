function initializeGl(gl){

}

function clearGlFlags(gl){

}

// From prev project
function loadShader(type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object
  gl.shaderSource(shader, source);

  // Compile the shader program
  gl.compileShader(shader);

  // Make sure it compiled successfully
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert( `An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`, );
    gl.deleteShader(shader);
    return null;
  }

  // Return the successfully compiled shader (Vertex or fragment)
  return shader;
}
