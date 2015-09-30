Многие умеют писать тесты, но мало кто пишет хорошо. Конструкции знают, а получается шифровка:

```ruby
describe User do
  describe "#admin?" do
    context "when user is locked" do
      # ...
    end
  end
end
```

В этом посте я постараюсь показать, как писать понятные, интересные и насыщенные тесты с хорошей структурой.


### Не указывайте явно тестируемый метод

Заинтересуйте читателя, сыграв на его инстинктах. Добавьте эмоций и местоимений:

```ruby
# плохо
describe ".authenticate"
describe "#admin?"
```

```ruby
# хорошо
describe "5 Crazy Methods To See Before You Die"
describe "The One Weird Method That Lets You Write To File Atomically"
```

### Не используйте `context`

`context` добавляет вложенности и увеличивает цикломатическую сложность тестов. Не надо так.

```ruby
# плохо
context "when logged in" do
  it { is_expected.to respond_with 200 }
end

context "when logged out" do
  it { is_expected.to respond_with 401 }
end
```

```ruby
# хорошо
it "has quite normal HTTP 200 status code if logged in" do
  response.should respond_with 200
end

it "has absolutely insane HTTP 401 status code if not logged in" do
  response.should respond_with 401
end
```

### Один тест — куча проверок
Каждый тест должен производить несколько проверок. Так мы сэкономим время на запись и запуск проверок. Сравните:

```ruby
# плохо
describe "#reported_conclusion" do
  subject { test.reported_conclusion }

  context "when conclusion is true" do
    before { test.conclusion = true }
    it { is_expected.to eq "Cool" }
  end

  context "when conclusion is false" do
    before { test.conclusion = false }
    it { is_expected.to eq "Not Cool" }
  end
end
```

```ruby
# хорошо
describe "That Conclusion Method All Humans Would Fall In Love" do
  it "should be always correct" do
    test.conclusion = true
    test.reported_conclusion.should eq "Cool"

    test.conclusion = false
    test.reported_conclusion.should eq "Not Cool"
  end
end
```

### Используйте `should`

Не пишите тексты тестов в третьем лице. Пусть сраный компьютер знает, что он обязан так работать: используйте `should`. Заодно потренируете скорость набора слова «should». Точно пригодится!

```ruby
# плохо
it "does not change timings" do
  expect(consumption.occur_at).to equal(valid.occur_at)
end
```

```ruby
# хорошо
it "should not change timings" do
  consumption.occur_at.should == valid.occur_at
end
```

Если вы используете данные советы, вам никогда не будет стыдно за написанное.
