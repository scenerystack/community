// Convert an AudioBuffer via .wav to a URL, so we can set it for audio elements

export const audioBufferToURL = async audioBuffer => {
  const numOfChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const length = audioBuffer.length * numOfChannels * 2 + 44; // 16-bit PCM
  const buffer = new ArrayBuffer( length );
  const view = new DataView( buffer );

  // WAV header
  let offset = 0;

  function writeString( s ) {
    for ( let i = 0; i < s.length; i++ ) {
      view.setUint8( offset++, s.charCodeAt( i ) );
    }
  }

  function writeUint32( n ) {
    view.setUint32( offset, n, true );
    offset += 4;
  }

  function writeUint16( n ) {
    view.setUint16( offset, n, true );
    offset += 2;
  }

  writeString( 'RIFF' );
  writeUint32( length - 8 ); // file length - 8
  writeString( 'WAVE' );
  writeString( 'fmt ' );
  writeUint32( 16 );
  writeUint16( 1 ); // PCM format
  writeUint16( numOfChannels );
  writeUint32( sampleRate );
  writeUint32( sampleRate * numOfChannels * 2 ); // byte rate
  writeUint16( numOfChannels * 2 );
  writeUint16( 16 ); // bits per sample
  writeString( 'data' );
  writeUint32( length - offset - 4 );

  // Write audio data
  for ( let i = 0; i < audioBuffer.length; i++ ) {
    for ( let channel = 0; channel < numOfChannels; channel++ ) {
      let sample = audioBuffer.getChannelData( channel )[ i ];
      sample = Math.max( -1, Math.min( 1, sample ) ); // Clamp
      view.setInt16( offset, sample * 0x7FFF, true ); // Convert to PCM
      offset += 2;
    }
  }

  const blob = new Blob( [ buffer ], { type: 'audio/wav' } );
  return URL.createObjectURL( blob );
};