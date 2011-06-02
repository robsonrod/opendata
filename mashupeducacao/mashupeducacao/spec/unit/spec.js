
describe 'LibEduca'


  describe 'DOM'

    before_each
        list = $(get('/'));
    end

    it 'jQuery request'
        list.
    end
  end

  describe '.json_education'

    before_each
        json_education = LibEduca.json_education("http://localhost:5984/matriculados/DF");
    end

    it 'should be open connection and get data from url, in format json'
      json_education.should.not.be_null
      alert(json_education);
      json_education.should.have_id 'ano2011'
    end
  end



end

